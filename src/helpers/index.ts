interface IRegExpContainer {
    [key: string]: RegExp;
};

export const usedRegExp: IRegExpContainer = {
    YOUTUBE_VIDEO_URL: /^http(s)?:\/\/([a-z0-9]+\.|)youtube.com(.*)\?v=([a-z0-9_-]+)/i
};
