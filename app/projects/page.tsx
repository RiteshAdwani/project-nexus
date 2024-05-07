import { auth } from "@/auth";
import Navbar from "@/components/shared/Navbar";
import ProjectCard from "@/components/shared/ProjectCard";

const ProjectsPage = async () => {
  const session = await auth();
  // try {
  //   const result = await fetch("http://localhost:3000/api/projects");

  //   const ans = await result.json();
  //   // console.log("Ans:",ans)
  // } catch (error) {
  //   console.log("Erorrrrrrr");
  // }

  return (
    <>
      <Navbar />
      <div className="mt-32 flex items-center justify-center">
        {JSON.stringify(session )}
      </div>
      <div className="flex justify-center items-center overflow-y-auto relative top-24 md:top-36 ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 justify-items-center md:max-w-4xl lg:max-w-6xl mx-auto gap-11">
          <ProjectCard
            coverImage="/lights.jpg"
            avatar="/default-user.png"
            username="User Name"
            title="Project Title"
          />
          <ProjectCard
            coverImage="/lights.jpg"
            avatar="/default-user.png"
            username="User Name"
            title="Project Title"
          />
          <ProjectCard
            coverImage="/lights.jpg"
            avatar="/default-user.png"
            username="User Name"
            title="Project Title"
          />
          <ProjectCard
            coverImage="/lights.jpg"
            avatar="/default-user.png"
            username="User Name"
            title="Project Title"
          />
          <ProjectCard
            coverImage="/lights.jpg"
            avatar="/default-user.png"
            username="User Name"
            title="Project Title"
          />
          <ProjectCard
            coverImage="/lights.jpg"
            avatar="/default-user.png"
            username="User Name"
            title="Project Title"
          />
          <ProjectCard
            coverImage="/lights.jpg"
            avatar="/default-user.png"
            username="User Name"
            title="Project Title"
          />
          <ProjectCard
            coverImage="/lights.jpg"
            avatar="/default-user.png"
            username="User Name"
            title="Project Title"
          />
          <ProjectCard
            coverImage="/lights.jpg"
            avatar="/default-user.png"
            username="User Name"
            title="Project Title"
          />
          <ProjectCard
            coverImage="/lights.jpg"
            avatar="/default-user.png"
            username="User Name"
            title="Project Title"
          />
          <ProjectCard
            coverImage="/lights.jpg"
            avatar="/default-user.png"
            username="User Name"
            title="Project Title"
          />
          <ProjectCard
            coverImage="/lights.jpg"
            avatar="/default-user.png"
            username="User Name"
            title="Project Title"
          />
          <ProjectCard
            coverImage="/lights.jpg"
            avatar="/default-user.png"
            username="User Name"
            title="Project Title"
          />
          <ProjectCard
            coverImage="/lights.jpg"
            avatar="/default-user.png"
            username="User Name"
            title="Project Title"
          />
          <ProjectCard
            coverImage="/lights.jpg"
            avatar="/default-user.png"
            username="User Name"
            title="Project Title"
          />
          <ProjectCard
            coverImage="/lights.jpg"
            avatar="/default-user.png"
            username="User Name"
            title="Project Title"
          />
          <ProjectCard
            coverImage="/lights.jpg"
            avatar="/default-user.png"
            username="User Name"
            title="Project Title"
          />
          <ProjectCard
            coverImage="/lights.jpg"
            avatar="/default-user.png"
            username="User Name"
            title="Project Title"
          />
          <ProjectCard
            coverImage="/lights.jpg"
            avatar="/default-user.png"
            username="User Name"
            title="Project Title"
          />
          <ProjectCard
            coverImage="/lights.jpg"
            avatar="/default-user.png"
            username="User Name"
            title="Project Title"
          />
          <ProjectCard
            coverImage="/lights.jpg"
            avatar="/default-user.png"
            username="User Name"
            title="Project Title"
          />
          <ProjectCard
            coverImage="/lights.jpg"
            avatar="/default-user.png"
            username="User Name"
            title="Project Title"
          />
          <ProjectCard
            coverImage="/lights.jpg"
            avatar="/default-user.png"
            username="User Name"
            title="Project Title"
          />
          <ProjectCard
            coverImage="/lights.jpg"
            avatar="/default-user.png"
            username="User Name"
            title="Project Title"
          />
          <ProjectCard
            coverImage="/lights.jpg"
            avatar="/default-user.png"
            username="User Name"
            title="Project Title"
          />
          <ProjectCard
            coverImage="/lights.jpg"
            avatar="/default-user.png"
            username="User Name"
            title="Project Title"
          />
        </div>
      </div>
    </>
  );
};

export default ProjectsPage;
