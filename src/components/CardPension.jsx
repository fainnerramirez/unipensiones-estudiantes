﻿import {
  Avatar,
  Box,
  Card,
  CardBody,
  CardFooter,
  Image,
  SkeletonCircle,
  Tag,
  TagLabel,
  Text
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import React, { useState, useContext } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { AuthContext } from "../context/authContext";
import { useFormatPrice } from "../custom/Hooks/useFormatPrice";
import moment from "moment";
moment.locale('es');

export const CardPension = ({
  anuncio
}) => {

  const [selectHeart, SetSelectHeart] = useState(false);
  const { userAuth } = useContext(AuthContext);
  const { convertPrice } = useFormatPrice();

  const handleImageDetails = () => {
    console.log("Click!: ", anuncio);
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.2,
        delay: 0.2,
        ease: [0, 0.71, 0.2, 1.01],
      }}
      as={'button'}
      onClick={handleImageDetails}
      style={{ cursor: 'pointer' }}
    >
      <Card border={'none'} boxShadow={'none'} maxW={{base: 'sm', md: 'md', lg: 'lg', xl: 'xl'}}>
        <CardBody padding="10px" display={'flex'} justifyContent={'center'} flexDirection={'column'}>
          <Box>
            <Image
              src={anuncio.urlPhoto}
              alt={anuncio.username}
              borderTopRadius="lg"
              height={{ base: '150px', md: "300px" }}
              width={{ base: '180px', md: "380px" }}
              fallbackSrc="https://via.placeholder.com/420"
              borderRadius={'lg'}
            />
          </Box> 
          <Box width={'full'} mt={2}>
            <Tag
              bg={'transparent'}
              size='md'
              colorScheme="blue"
              borderRadius='full'
            >
              <Avatar
                src={anuncio.userPhoto}
                size={'sm'}
                name={anuncio.username}
                ml={-2}
                mr={2}
              />
              <TagLabel fontWeight={'bold'}>{anuncio.username}</TagLabel>
            </Tag>
          </Box>
          <Box>
            <Text display={{ base: 'none', md: 'block' }} textTransform={'capitalize'} fontWeight={'bold'}>{anuncio?.city}, {anuncio?.country}</Text>
            <Text display={{ base: 'none', md: 'block' }}> agregado el {moment(anuncio.dateCreatedAt, 'DD/MM/YYYY').format('ll')}</Text>
          </Box>
        </CardBody>
        <CardFooter p={0}>
          <Text display={{ base: 'none', md: 'block' }} ml={2} fontWeight={'bold'}>$ {convertPrice(anuncio?.price)} COP<span style={{ fontWeight: 'normal' }}> mes</span></Text>
        </CardFooter>
      </Card>
    </motion.div>
  );
};