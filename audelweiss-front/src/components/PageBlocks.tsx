import { PageContentDynamicZone } from "../types/generated";
import CardsList from "./modules/CardsList";

type Props = {
  blocks: PageContentDynamicZone[];
};

const PageBlocks = ({ blocks }: Props) => {
  return (
    <div className="[&>*]:mt-7 last:[&>*]:mb-7">
      {blocks.map(block => {
        switch (block.__typename) {
          case "ComponentBlocksCardsList":
            return <CardsList key={`${block.__typename}-${block.id}`} block={block} />;
          default:
            return null;
        }
      })}
    </div>
  );
};

export default PageBlocks;
