"use client";
import FolderWrapper from "../FolderCardContainer";
import ProjectCard from "../ProjectCard";
import Sidebar from "./SideBar";
import TextReveal from "@/components/magicui/text-reveal";
const sideBarContent = [
  {
    title: "Hat",
    description: "To wear on the top",
    label: "Something | Flag",
    image: "https://picsum.photos/300/400?random=1",
  },
  {
    title: "Shirt",
    description: "To wear on the body",
    label: "Something | Flag",
    image: "https://picsum.photos/300/400?random=2",
  },
  {
    title: "Pants",
    description: "To wear on the bottom",
    label: "Something | Flag",
    image: "https://picsum.photos/300/400?random=3",
  },
  {
    title: "Shoes",
    description: "To wear on the feet",
    label: "Something | Flag",
    image: "https://picsum.photos/300/400?random=4",
  },
];

const SecondSection = () => {
  return (
    <div className="flex items-start flex-col md:flex-row justify-between mt-40 gap-12 lg:gap-20">
      <div className=" w-full min-w-96 max-w-2xl h-screen md:sticky md:top-[10%] p-4 shadow-md">
        <Sidebar />
      </div>

      <div>
        <TextReveal
          className="text-white"
          text="We've helped over 350 firms reach their full potential, and we're happy to do the same for you! Find out how our skills can contribute to your success."
        />

        <FolderWrapper>some</FolderWrapper>
        {/* <div className="">
          <div className="grid grid-cols-2">
            {Array.from({ length: 10 }).map((_, index) => {
              return (
                <ProjectCard
                  key={index}
                  image="https://cdn.prod.website-files.com/63fc977c14aaea404dce4439/66bc83769af253c52bbc682e_Preview.webp"
                  flagContent={
                    <span>
                      web3 | <strong>flag</strong>
                    </span>
                  }
                  description={
                    <>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      </p>
                      <p>
                        Voluptas aut in modi impedit recusandae soluta repellat
                        corporis ad nam qui maxime, hic quo blanditiis ipsum
                        dolorum.
                      </p>
                    </>
                  }
                />
              );
            })}
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default SecondSection;
