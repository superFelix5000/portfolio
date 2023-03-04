import { Head } from "$fresh/runtime.ts";
import IconBrandGithub from "https://deno.land/x/tabler_icons_tsx@0.0.2/tsx/brand-github.tsx"
import IconBrandLinkedin from "https://deno.land/x/tabler_icons_tsx@0.0.2/tsx/brand-linkedin.tsx"
import IconBrandMastodon from "https://deno.land/x/tabler_icons_tsx@0.0.2/tsx/brand-mastodon.tsx"

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
            German/Finnish developer with background in games, education technology and smart
            cities. Feel free to take a look at some of my personal projects on <a href="https://github.com/superFelix5000" class="underline hover:font-bold">Github</a>.
            You can reach me at <a href="https://www.linkedin.com/in/felixwestphal/" class="underline hover:font-bold">LinkedIn</a> and&nbsp;
            <a href="hhttps://fosstodon.org/@superFelix5000" class="underline hover:font-bold">Mastodon</a> or send me a mail via&nbsp;
            <a class="underline hover:font-bold" href="javascript:location='mailto:\u0066\u0077\u0065\u0073\u0074\u0040\u0070\u006f\u0073\u0074\u0065\u006f\u002e\u0064\u0065';void 0"><script type="text/javascript">document.write('\u0066\u0077\u0065\u0073\u0074\u0040\u0070\u006f\u0073\u0074\u0065\u006f\u002e\u0064\u0065')</script></a>
          </p>
        </div>
        <div class="w-full flex flex-row justify-center mt-20 text-gray-500 gap-5">
          <a href="https://github.com/superFelix5000" title="GitHub">
            <IconBrandGithub class="w-9 h-9 hover:text-gray-800"/>
          </a>
          <a href="https://www.linkedin.com/in/felixwestphal/" class="transition duration-75 ease-in-out" title="LinkedIn">
            <IconBrandLinkedin class="w-9 h-9 hover:text-gray-800" />
          </a>
          <a href="https://fosstodon.org/@superFelix5000" title="Mastodon">
            <IconBrandMastodon class="w-9 h-9 hover:text-gray-800"/>
          </a>
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
