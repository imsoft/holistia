import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";

const faqs = [
  {
    question: "¿Qué es Holistia?",
    answer:
      "Holistia es una plataforma de bienestar integral que conecta a usuarios con profesionales de diversas disciplinas para mejorar su salud mental, física y social. Ofrecemos una amplia gama de terapias tradicionales y alternativas, herramientas innovadoras de monitoreo y una comunidad de apoyo.",
  },
  {
    question: "¿Cómo me registro en Holistia?",
    answer:
      "Puedes registrarte en Holistia a través de nuestro sitio web. Simplemente sigue las instrucciones para crear una cuenta y comenzar a explorar nuestros servicios.",
  },
  {
    question: "¿Cómo funciona Holistia?",
    answer:
      "Holistia permite a los usuarios registrarse, buscar y conectarse con profesionales del bienestar, participar en retos y eventos. Nuestra plataforma utiliza inteligencia artificial para ofrecer recomendaciones personalizadas y facilitar el seguimiento del progreso de los usuarios.",
  },
  {
    question: "¿Qué tipos de terapias están disponibles en Holistia?",
    answer:
      "En Holistia, ofrecemos una amplia gama de terapias, incluyendo psicoterapia, medicina holística, homeopatía, herbolaria, reiki, tai chi, medicina cuántica, medicina china y más.",
  },
  {
    question: "¿Qué es la comunidad de Holistia?",
    answer:
      "La comunidad de Holistia es un espacio donde los usuarios pueden interactuar, compartir sus logros, participar en retos y recibir apoyo de otros miembros y profesionales. Fomentamos un ambiente positivo y motivador para ayudarte a alcanzar tus objetivos de bienestar.",
  },
  {
    question: "¿Cómo protege Holistia mi información personal?",
    answer:
      "La seguridad de tus datos es nuestra prioridad. Utilizamos tecnología de encriptación avanzada para proteger tu información personal y seguimos estrictas políticas de privacidad para garantizar que tus datos estén seguros.",
  },
];

const FaqPage = () => {
  return (
    <>
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-12 sm:py-16 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
            <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">
              Preguntas frecuentes
            </h2>
            <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
              {faqs.map((faq) => (
                <Disclosure key={faq.question} as="div" className="pt-6">
                  <dt>
                    <DisclosureButton className="group flex w-full items-start justify-between text-left text-gray-900">
                      <span className="text-base font-semibold leading-7">
                        {faq.question}
                      </span>
                      <span className="ml-6 flex h-7 items-center">
                        <ChevronDownIcon
                          aria-hidden="true"
                          className="h-6 w-6 group-data-[open]:hidden"
                        />
                        <ChevronUpIcon
                          aria-hidden="true"
                          className="h-6 w-6 [.group:not([data-open])_&]:hidden"
                        />
                      </span>
                    </DisclosureButton>
                  </dt>
                  <DisclosurePanel transition as="dd" className="mt-2 pr-12 origin-top transition duration-200 ease-out data-[closed]:-translate-y-6 data-[closed]:opacity-0">
                    <p className="text-base leading-7 text-gray-600">
                      {faq.answer}
                    </p>
                  </DisclosurePanel>
                </Disclosure>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </>
  );
};

export default FaqPage;
