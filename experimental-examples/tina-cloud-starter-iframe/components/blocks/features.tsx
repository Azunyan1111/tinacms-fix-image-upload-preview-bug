import { Actions } from "../actions";
import { Section } from "../section";
import { Container } from "../container";
import { Icon } from "../icon";
import type { TinaTemplate } from "tinacms";
import { iconSchema } from "../icon";
import { tinaField as tField } from "tinacms/dist/react";

export const Feature = ({ featuresColor, data, tinaField }) => {
  return (
    <div
      data-tinafield={tinaField}
      className="flex-1 flex flex-col gap-6 text-center items-center lg:items-start lg:text-left max-w-xl mx-auto"
      style={{ flexBasis: "16rem" }}
    >
      {data.icon && (
        <Icon
          tinaField={tField(data, "icon")}
          parentColor={featuresColor}
          data={data.icon}
        />
      )}
      {data.title && (
        <h3
          data-tinaField={tField(data, "title")}
          className="text-2xl font-semibold title-font"
        >
          {data.title}
        </h3>
      )}
      {data.text && (
        <p
          data-tinaField={tField(data, "text")}
          className="text-base opacity-80 leading-relaxed"
        >
          {data.text}
        </p>
      )}
      {data.actions && <Actions actions={data.actions} />}
    </div>
  );
};

export const Features = ({ data, parentField }) => {
  return (
    <Section color={data.color}>
      <Container
        className={`flex flex-wrap gap-x-10 gap-y-8 text-left`}
        size="large"
      >
        {data.items &&
          data.items.map(function (block, i) {
            return (
              <Feature
                tinaField={tField(block)}
                featuresColor={data.color}
                key={i}
                data={block}
              />
            );
          })}
      </Container>
    </Section>
  );
};

const defaultFeature = {
  title: "Here's Another Feature",
  text: "This is where you might talk about the feature, if this wasn't just filler text.",
  icon: {
    color: "",
    style: "float",
    name: "",
  },
};

export const featureBlockShema: TinaTemplate = {
  name: "features",
  label: "Features",
  ui: {
    previewSrc: "/blocks/features.png",
    defaultItem: {
      items: [defaultFeature, defaultFeature, defaultFeature],
    },
  },
  fields: [
    {
      type: "object",
      label: "Feature Items",
      name: "items",
      list: true,
      ui: {
        defaultItem: {
          ...defaultFeature,
        },
      },
      fields: [
        iconSchema,
        {
          type: "string",
          label: "Title",
          name: "title",
        },
        {
          type: "string",
          label: "Text",
          name: "text",
          ui: {
            component: "textarea",
          },
        },
      ],
    },
    {
      type: "string",
      label: "Color",
      name: "color",
      options: [
        { label: "Default", value: "default" },
        { label: "Tint", value: "tint" },
        { label: "Primary", value: "primary" },
      ],
    },
  ],
};
