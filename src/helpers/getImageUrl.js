// @flow
declare var IMAGE_HOST: string;

export const getImageUrl = (imageName: string) => `${IMAGE_HOST}/${imageName}`;
