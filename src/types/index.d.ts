export interface IVideo {
    id: number;
    url: string;
    current?: boolean;
}

export interface IApplicationState {
    currentVideo: IVideo|null;
    videoList: IVideo[];
}
