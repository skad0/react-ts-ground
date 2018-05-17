export interface IVideo {
    url: string;
}

export interface IApplicationState {
    currentVideo: IVideo|null;
    videoList: IVideo[];
}
