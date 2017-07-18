export interface BlogPost {
  _id: {
    $oid: string;
  }
  title: string,
  date: number,
  thumbnail?: string,
  content: string
}
