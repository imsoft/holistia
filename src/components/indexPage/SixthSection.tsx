import Link from "next/link";
import Image from "next/image";

export const SixthSection = () => {
  return (
    <>
      <div className="overflow-hidden bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
            <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Nuestra Comunidad
              </h2>
              <p className="mt-6 text-xl leading-8 text-gray-600">
                En Holistia, creemos en el poder de las conexiones auténticas.
                Nuestra plataforma reúne a profesionales del bienestar y
                usuarios en un espacio dedicado al crecimiento personal y al
                apoyo mutuo. Ya sea que busques mejorar tu salud mental, física
                o social, encontrarás en nuestra comunidad la motivación y el
                respaldo que necesitas.
              </p>
              <p className="mt-6 text-base leading-7 text-gray-600">
                Únete a Holistia y experimenta cómo la colaboración y la
                comunidad pueden transformar tu bienestar. Desde talleres
                interactivos hasta recursos educativos, te ofrecemos todo lo que
                necesitas para alcanzar tus metas de salud.
              </p>
              <div className="mt-10 flex">
                <Link
                  href="#"
                  className="rounded-md bg-sky-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
                >
                  Únete a nuestra comunidad{" "}
                  <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </div>
            <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
              <div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
                <Image
                  alt=""
                  src="/images/index-page/Nuestra Comunidad - Holistica - 1.jpg"
                  className="aspect-[7/5] w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                  width={1152}
                  height={842}
                />
              </div>
              <div className="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8">
                <div className="order-first flex w-64 flex-none justify-end self-end lg:w-auto">
                  <Image
                    alt=""
                    src="/images/index-page/Nuestra Comunidad - Holistica - 2.jpg"
                    className="aspect-[4/3] w-[24rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                    width={768}
                    height={604}
                  />
                </div>
                <div className="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
                  <Image
                    alt=""
                    src="/images/index-page/Nuestra Comunidad - Holistica - 3.jpg"
                    className="aspect-[7/5] w-[37rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                    width={1152}
                    height={842}
                  />
                </div>
                <div className="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
                  <Image
                    alt=""
                    src="/images/index-page/Nuestra Comunidad - Holistica - 4.jpg"
                    className="aspect-[4/3] w-[24rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                    width={768}
                    height={604}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
