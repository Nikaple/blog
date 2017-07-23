export interface BlogPost {
  _id: {
    $oid: string;
  }
  date: number,
  title?: string,
  thumbnail?: string,
  content: string,
  description?: string
}
