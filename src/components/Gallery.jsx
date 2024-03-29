import React, { useEffect, useState } from 'react'
import { CardPension } from './CardPension'
import Navbar from './Navbar';
import { Box, Grid, GridItem, Heading } from '@chakra-ui/react';
import { getAllAdvertsAnfitrion } from '../firebase/collections/querys/anfitriones';
import { ToastContainer, toast } from 'react-toastify';
import { Link } from "react-router-dom"

const Gallery = () => {

    const [anuncios, setAnuncios] = useState([]);

    useEffect(() => {
        const getDocuments = async () => {
            let documents = await getAllAdvertsAnfitrion(10);
            setAnuncios(documents);
            console.log("Documents: ", documents)
        }
        getDocuments();
    }, [])

    useEffect(() => {
        toast.info("Dale clic a cualquiera de las fotos para ver sus detalles", {
            theme: 'colored',
            position: 'top-center'
        })
    }, [])

    return (
        <>
            <Navbar />
            <Heading textAlign={'center'} pt={10} pb={10}>Anuncios publicados</Heading>
            <Grid templateColumns={{base: 'repeat(2, 1fr)', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)', xl: 'repeat(5, 1fr)'}}
                gap={{base: 1, md: 10}}
                width={{base: '100%', md: '95%'}}
                margin={'auto'}>
                {
                    anuncios.map((anuncio, i) => (
                        <GridItem key={i}>
                            <Link to={'/gallery/' + anuncio?.id}>
                                <CardPension anuncio={anuncio} key={anuncio?.id} />
                            </Link>
                        </GridItem>
                    ))
                }
            </Grid>
            <ToastContainer />
        </>
    )
}

export default Gallery;