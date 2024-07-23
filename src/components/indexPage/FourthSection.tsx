import Link from "next/link";
import Image from "next/image";
import SparklesIcon from "@heroicons/react/24/outline/SparklesIcon";

export const FourthSection = () => {
  return (
    <>
      <div className="relative overflow-hidden py-12 sm:py-16">
        <div aria-hidden="true" className="absolute inset-x-0 top-0 h-48 " />
        <div className="mt-24">
          <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
            <div className="mx-auto max-w-xl px-6 lg:col-start-2 lg:mx-0 lg:max-w-none lg:px-0 lg:py-32">
              <div>
                <div>
                  <span className="flex h-12 w-12 items-center justify-center rounded-md bg-sky-600">
                    <SparklesIcon
                      aria-hidden="true"
                      className="h-6 w-6 text-white"
                    />
                  </span>
                </div>
                <div className="mt-6">
                  <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                    Entiende mejor tus necesidades de salud con Holistia
                  </h2>
                  <p className="mt-4 text-lg text-gray-500">
                    En Holistia, nos dedicamos a ofrecerte una experiencia
                    personalizada que abarca todas las facetas de tu bienestar.
                    Nuestra plataforma combina tecnología avanzada y un enfoque
                    humano para ayudarte a alcanzar tus metas de salud física,
                    mental y social.
                  </p>
                  <div className="mt-6">
                    <Link
                      href="#"
                      className="inline-flex rounded-md border border-transparent bg-sky-600 bg-origin-border px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-sky-500"
                    >
                      Comienza Ahora
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12 sm:mt-16 lg:col-start-1 lg:mt-0">
              <div className="-ml-48 pr-6 md:-ml-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                <Image
                  alt="Customer profile user interface"
                  src="/images/index-page/Holistica 1.jpg"
                  className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                  width={800}
                  height={600}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
