import { Card, CardFooter, CardContent, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { HeartIcon } from "lucide-react";

interface ProjectCardProps{
  coverImage:string,
  title:string,
  username:string,
  avatar:string
}

const ProjectCard = ({
  coverImage,
  title,
  username,
  avatar
}: ProjectCardProps) => {
  return (
    <Card className="w-[300px] text-center flex-col justify-center items-center cursor-pointer pt-3">
      <CardContent>
        <Image
          src={coverImage}
          alt="Project Image"
          height={200}
          width={200}
          className="w-full rounded-lg"
        />
        <CardTitle className="text-lg font-semibold">
          {title}
        </CardTitle>
      </CardContent>
      <CardFooter className="flex justify-between">
        <div className="flex items-center">
          <Image
            src={avatar}
            alt="user"
            height={30}
            width={30}
            className="me-3 rounded-full"
          />
          <p className="p-0">{username}</p>
        </div>
        <HeartIcon />
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
