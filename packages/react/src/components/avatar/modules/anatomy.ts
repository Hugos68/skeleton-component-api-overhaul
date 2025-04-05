import AvatarRoot from "../anatomy/avatar-root";
import AvatarImage from "../anatomy/avatar-image";
import AvatarFallback from "../anatomy/avatar-fallback";

const Avatar = Object.assign(AvatarRoot, {
    Image: AvatarImage,
    Fallback: AvatarFallback,
});

export { Avatar };