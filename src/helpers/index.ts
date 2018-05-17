interface IRegExpContainer {
    [key: string]: RegExp;
};

export const usedRegExp: IRegExpContainer = {
    YOUTUBE_VIDEO_ID: /\?v=([a-z0-9]+)/i
};
