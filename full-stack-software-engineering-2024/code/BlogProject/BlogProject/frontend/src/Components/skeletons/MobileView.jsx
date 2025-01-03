import React from "react";
import {
  SimpleGrid,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
} from "@chakra-ui/react";

const MobileViewSkeleton = () => {
  return [...Array(6)].map((_, index) => (
    <Box
      bg={bg}
      mb={{ base: "2", sm: "4" }}
      p={{ base: "2", sm: "4" }}
      rounded="lg"
      key={index}
      h={{ base: "12rem", sm: "16rem" }}
    >
      <Box>
        <SkeletonCircle
          mt={{ base: "1", sm: "2" }}
          size={{ base: "8", sm: "12" }}
        ></SkeletonCircle>
        <SkeletonText
          ml={{ base: "10", sm: "14" }}
          mt={{ base: "-7", sm: "-9" }}
          skeletonHeight={2}
          noOfLines={2}
        ></SkeletonText>
      </Box>
      <SkeletonText
        mt={{ base: "6", sm: "12" }}
        noOfLines={3}
        skeletonHeight={2}
      ></SkeletonText>
      <Skeleton mt="4" h="14"></Skeleton>
    </Box>
  ));
};

export default MobileViewSkeleton;
