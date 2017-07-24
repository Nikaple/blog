export interface ProjectInfo {
  _id: {
    $oid: string;
  }
  name: string;
  tabName: string;
  date: number;
  thumbnail: string;
  description: string; // less than 128 characters
  link: string;
  fullImage: string;
  category: string;
  previewLink?: string;
  content?: string;
}
