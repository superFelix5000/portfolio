import IconBrandGithub from "https://deno.land/x/tabler_icons_tsx@0.0.2/tsx/brand-github.tsx";
import IconBrandLinkedin from "https://deno.land/x/tabler_icons_tsx@0.0.2/tsx/brand-linkedin.tsx";
import IconBrandMastodon from "https://deno.land/x/tabler_icons_tsx@0.0.2/tsx/brand-mastodon.tsx";

export function LinkIcons() {
    return (
        <div class="w-full flex flex-row mt-20 justify-center text-gray-500 gap-5">
          <a href="https://github.com/superFelix5000" title="Github">
            <IconBrandGithub class="w-9 h-9 hover:text-github" />
          </a>
          <a
            href="https://www.linkedin.com/in/felixwestphal/"
            class="transition duration-75 ease-in-out"
            title="LinkedIn"
          >
            <IconBrandLinkedin class="w-9 h-9 hover:text-linkedin" />
          </a>
          <a href="https://fosstodon.org/@superFelix5000" title="Mastodon">
            <IconBrandMastodon class="w-9 h-9 hover:text-mastodon" />
          </a>
        </div>
    );
}