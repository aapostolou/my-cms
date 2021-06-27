import { template as TitleBlockTemplate } from "components/TitleBlock";

const BlockTemplate = {
  id: "page",
  label: "Simple Page",
  fields: [
    {
      label: "Blocks",
      name: "_blocks",
      component: "blocks",
      templates: {
        "title-block": TitleBlockTemplate
      }
    }
  ],
  initialValues: {},
  itemProps: (item) => ({
    label: item.label ? (
      <span>
        {item.label}
        <span style={{ color: "#ccc" }}> ( Simple Page )</span>
      </span>
    ) : null
  })
};

export { BlockTemplate };
