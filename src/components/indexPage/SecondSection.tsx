import {
  ChatBubbleBottomCenterTextIcon,
  UserGroupIcon,
  DevicePhoneMobileIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "Conexiones Reales",
    description:
      "Fomenta relaciones auténticas con profesionales y otros usuarios a través de retos y eventos motivadores.",
    href: "#",
    icon: ChatBubbleBottomCenterTextIcon,
  },
  {
    name: "Terapias Variadas",
    description:
      "Accede a una amplia gama de terapias tradicionales y alternativas, desde psicoterapia hasta medicina holística.",
    href: "#",
    icon: UserGroupIcon,
  },
  {
    name: "Herramientas Innovadoras",
    description:
      "Utiliza herramientas avanzadas de monitoreo y acompañamiento impulsadas por IA para un seguimiento personalizado y efectivo.",
    href: "#",
    icon: DevicePhoneMobileIcon,
  },
];

export const SecondSection = () => {
  return (
    <>
      <div className="bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-sky-600">
              Holistia
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Todo lo que necesitas para tu bienestar
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Encuentra profesionales, accede a terapias diversas y mejora tu
              calidad de vida con herramientas innovadoras y una comunidad de
              apoyo.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {features.map((feature) => (
                <div key={feature.name} className="flex flex-col">
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                    <feature.icon
                      aria-hidden="true"
                      className="h-5 w-5 flex-none text-sky-600"
                    />
                    {feature.name}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">{feature.description}</p>
                    <p className="mt-6">
                      <a
                        href={feature.href}
                        className="text-sm font-semibold leading-6 text-sky-600"
                      >
                        Aprende Más <span aria-hidden="true">→</span>
                      </a>
                    </p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </>
  );
};
