import Image from "next/image";

export const ThirdSection = () => {
  return (
    <>
      <div className="py-6 sm:py-8 xl:mx-auto xl:max-w-7xl xl:px-8">
        <Image
          alt=""
          src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
          className="aspect-[5/2] w-full object-cover xl:rounded-3xl"
          width={2832}
          height={1416}
        />
      </div>
    </>
  );
};
