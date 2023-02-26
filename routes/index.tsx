import { Head } from "$fresh/runtime.ts";

type Props = {
  active: string;
};

export default function Home({ active }: Props) {
  const menus = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
  ];

  return (
    <>
      <Head>
        <title>Felix Westphal</title>
      </Head>
      <div class="p-4 mx-auto max-w-screen-md">
        <div class="bg-white w-full max-w-screen-lg flex flex-col md:flex-row gap-4 justify-end">
          <ul class="flex items-center gap-6">
            {menus.map((menu) => (
              <li>
                <a
                  href={menu.href}
                  class={"text-gray-500 text-lg font-thin hover:text-gray-700 py-1 border-gray-500 font-mono" +
                    (menu.href === active ? " font-bold border-b-2" : "")}
                >
                  {menu.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div class="mt-10 md:mt-20">
          <div class="flex sm:flex-row flex-col gap-5 w-full">
            <img
              src="/me.png"
              class="rounded-full md:w-52 md:h-52 w-24 h-24"
              alt="picture of me"
            />
            <div class="flex flex-col justify-center">
              <div class="flex flex-row gap-4 sm:gap-0 sm:flex-col">
                <p class="font-mono text-2xl md:text-4xl font-light">
                  Hi
                </p>
                <p class="font-mono text-2xl md:text-4xl font-light">
                  I'm
                </p>
              </div>
              <h1 class="font-mono text-2xl font-semibold md:text-5xl">
                Felix Westphal
              </h1>
            </div>
          </div>
          <p class="mt-16 font-mono text-lg font-thin">
            Finnish/German developer with background in games, education technology and smart
            cities.
          </p>
        </div>
        
      </div>
      <div class="flex justify-center fixed bottom-5 w-full">
        <a href="https://fresh.deno.dev">
          <img width="197" height="37" src="https://fresh.deno.dev/fresh-badge.svg" alt="Made with Fresh" />
        </a>
      </div>
    </>
  );
}
