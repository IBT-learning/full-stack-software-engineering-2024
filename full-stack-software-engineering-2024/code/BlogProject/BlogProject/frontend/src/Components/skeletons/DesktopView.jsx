import React from "react";
import {
  Box,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  useColorModeValue,
} from "@chakra-ui/react";

const DesktopViewSkeleton = () => {
  const bg = useColorModeValue("gray.200", "gray.900");

  return (
    <>
      <Box
        h="350px"
        padding="2"
        boxShadow="lg"
        bg={bg}
        rounded="lg"
        rowGap="4"
        columnGap="6"
      >
        <SkeletonCircle size="12" />
        <SkeletonText
          mt="4"
          mb="2"
          noOfLines={2}
          spacing="4"
          skeletonHeight="3"
        />
        <Skeleton mt="4" h="32"></Skeleton>
        <SkeletonText mt="4" noOfLines={3} spacing="2" skeletonHeight="3" />
      </Box>
    </>
  );
};

export default DesktopViewSkeleton;
