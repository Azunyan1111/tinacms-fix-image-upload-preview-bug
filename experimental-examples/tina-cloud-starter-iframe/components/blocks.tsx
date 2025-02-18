import React from "react";
import type { Pages } from "../.tina/__generated__/types";
import { Content } from "./blocks/content";
import { Features } from "./blocks/features";
import { Hero } from "./blocks/hero";
import { tinaField } from "tinacms/dist/react";
import { Testimonial } from "./blocks/testimonial";

export const Blocks = (props: Omit<Pages, "id" | "_sys" | "_values">) => {
  return (
    <>
      {props.blocks
        ? props.blocks.map(function (block, i) {
            switch (block.__typename) {
              case "PagesBlocksContent":
                return (
                  <div
                    data-tinafield={tinaField(block)}
                    key={i + block.__typename}
                  >
                    <Content data={block} parentField={`blocks.${i}`} />
                  </div>
                );
              case "PagesBlocksHero":
                return (
                  <div
                    data-tinafield={tinaField(block)}
                    key={i + block.__typename}
                  >
                    <Hero data={block} parentField={`blocks.${i}`} />
                  </div>
                );
              case "PagesBlocksFeatures":
                return (
                  <div
                    data-tinafield={tinaField(block)}
                    key={i + block.__typename}
                  >
                    <Features data={block} parentField={`blocks.${i}`} />
                  </div>
                );
              case "PagesBlocksTestimonial":
                return (
                  <div
                    data-tinafield={tinaField(block)}
                    key={i + block.__typename}
                  >
                    <Testimonial data={block} parentField={`blocks.${i}`} />
                  </div>
                );
              default:
                return null;
            }
          })
        : null}
    </>
  );
};
