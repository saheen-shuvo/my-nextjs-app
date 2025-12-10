import Image from "next/image";
import shuvoImg from "../../assets/shuvo.jpg";
const GalleryPage = () => {
  return (
    <div>
      {/* Bad Practice */}
      {/* <h1 className="text-center">Regular img Component</h1>
      <div className="flex justify-center">
        <img width={500} height={500} src="https://i.ibb.co/jPKCQSRS/4.jpg"></img>
      </div> */}
      {/* Good Practice */}
      <h1 className="text-center">Next JS Image Component</h1>
      <div className="flex justify-center">
        <Image width={500} height={500} src="https://i.ibb.co/jPKCQSRS/4.jpg" alt="hdh"></Image>
      </div>
      <h1 className="text-center">Local File Image Component</h1>
      <div className="flex justify-center">
        <Image width={500} height={500} src={shuvoImg} alt="dg"></Image>
      </div>
    </div>
  );
};

export default GalleryPage;
