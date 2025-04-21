import { PageContentDynamicZone } from "@/src/types/generated";
import SingleSlider from "@/src/components/modules/SingleSlider";
import CardsList from "@/src/components/modules/CardsList";
import HighlightingCreations from "@/src/components/modules/HighlightingCreations";

type Props = {
  blocks: PageContentDynamicZone[];
};

const PageBlocks = ({ blocks }: Props) => {

  return (
    <div className="[&>*:not(:first-child)]:mt-7 last:[&>*:not(:last-child)]:mb-7">
      {blocks.map(block => {
        switch (block.__typename) {
          case "ComponentBlocksCardsList":
            return <CardsList key={`${block.__typename}-${block.id}`} block={block} />;
          case "ComponentBlocksSingleSlider":
            return <SingleSlider key={`${block.__typename}-${block.id}`} block={block} />;
          case "ComponentBlocksHighlightingCreations":
            return <HighlightingCreations key={`${block.__typename}-${block.id}`} block={block} />;
          default:
            return null;
        }
      })}
    </div>
  );
};

export default PageBlocks;
