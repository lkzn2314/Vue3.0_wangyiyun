// 请求图片格式化尺寸
export function formatImgSize(imgUrl: string, size = 140) {
    return `${imgUrl}?param=${size}x${size}`;
}