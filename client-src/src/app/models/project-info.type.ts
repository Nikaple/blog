export interface ProjectInfo {
  _id: {
    $oid: string;
  }
  name: string,
  date: number,
  thumbnail: string,
  description: string, // less than 128 characters
  link: string,
}
