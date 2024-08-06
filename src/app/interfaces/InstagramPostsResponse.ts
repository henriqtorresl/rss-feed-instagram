import { Post } from "./Post";

export interface InstagramPostsResponse {
    data: Post[];
    paging: any;
}