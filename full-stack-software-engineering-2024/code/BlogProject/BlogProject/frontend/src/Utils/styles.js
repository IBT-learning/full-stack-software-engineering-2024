import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";

export const inputStyle = {
  rounded: "xl",
  bg: "green.400",
  opacity: "0.5",
  _placeholder: {
    color: "black",
  },
  _focus: {
    bg: "whiteAlpha.400",
    opacity: "0.7",
    color: "black",
    fontSize: "lg",
    fontWeight: "semiBold",
  },
};

export const buttonStyle = {
  bgGradient: "linear(green.800, green.300, green.700)",
  color: "blackAlpha.800",
  rounded: "3xl",
  fontSize: "lg",
  fontWeight: "semibold",
  letterSpacing: "wide",
  _hover: {
    bgGradient: "linear(green.800, green.300, green.700)",
    color: "whiteAlpha.800",
    opacity: 0.9,
    transform: "scale(1.08)",
    transition: "All 300ms ease-in-out",
  },
};

export const uploadImage = async (event) => {
  const file = event.target.files[0];

  if (!file || !file.type.match(/image.*/)) {
    throw new Error("Invalid file type: Please upload an image.");
  }

  const reader = new FileReader();
  return new Promise((resolve, reject) => {
    reader.onload = (event) => {
      resolve(event.target.result);
    };

    reader.onerror = (error) => {
      reject(error);
    };
    reader.readAsDataURL(file);
  });
};

export const formattedDate = (dateOfPost) => {
  dayjs.extend(localizedFormat);
  const postDate = dayjs(dateOfPost).format("lll");
  return postDate;
};
