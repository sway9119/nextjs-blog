import Link from "next/link";
import Image from "next/image";

const ImageComponent = () => (
  <div>
    <Image
      src="/images/profile.jpg" // Route of the image file
      height={144} // Desired size with correct aspect ratio
      width={144} // Desired size with correct aspect ratio
      alt="Your Name"
    />
  </div>
);

export default function FirstPost() {
  return (
    <>
      <h1>First Post</h1>
      <h2>
        <ImageComponent></ImageComponent>
        <Link href="/">Back to home</Link>
      </h2>
    </>
  );
}
