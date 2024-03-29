import { Box } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { AuthContext } from '../context/authContext'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { getAnfitrionByUserId } from '../firebase/collections/querys/anfitriones'
import Navbar from '../components/Navbar'

const Layout = ({ children }) => {

  const auth = getAuth();
  const [userAuth, SetUserAuth] = useState(null);
  const [isSuperanfitrion, setSuperanfitrion] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (userCredentials) => {
      if (userCredentials) {
        SetUserAuth(userCredentials)
      } else {
        SetUserAuth(null)
      }
    });

    localStorage.setItem("user", JSON.stringify(userAuth))
  }, [userAuth])

  // useEffect(() => {
  //   const getDocument = async () => {
  //     let documentanfitrion = await getAnfitrionByUserId(userAuth?.uid)
  //     setSuperanfitrion(documentanfitrion?.superanfitrion);
  //   }
  //   getDocument();
  // }, [userAuth])

  return (
    <AuthContext.Provider value={{ auth, userAuth }}>
      <Box>
        {children}
      </Box>
    </AuthContext.Provider>
  )
}

export default Layout