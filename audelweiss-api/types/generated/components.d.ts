import type { Schema, Struct } from '@strapi/strapi';

export interface BlocksCardsList extends Struct.ComponentSchema {
  collectionName: 'components_blocks_cards_lists';
  info: {
    description: '';
    displayName: 'Cards list';
    icon: 'apps';
  };
  attributes: {
    cards: Schema.Attribute.Component<'component.card', true> &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 3;
          min: 1;
        },
        number
      >;
    heading: Schema.Attribute.String;
  };
}

export interface BlocksFeaturedArticles extends Struct.ComponentSchema {
  collectionName: 'components_blocks_featured_articles';
  info: {
    description: '';
    displayName: 'Featured articles';
    icon: 'grid';
  };
  attributes: {
    articles: Schema.Attribute.Relation<'oneToMany', 'api::article.article'>;
    link: Schema.Attribute.Component<'component.simple-link', false>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface BlocksFeaturedProducts extends Struct.ComponentSchema {
  collectionName: 'components_blocks_featured_products';
  info: {
    description: '';
    displayName: 'Featured products';
    icon: 'plus';
  };
  attributes: {
    heading: Schema.Attribute.Blocks;
    products: Schema.Attribute.Relation<'oneToMany', 'api::product.product'>;
  };
}

export interface BlocksHero extends Struct.ComponentSchema {
  collectionName: 'components_blocks_heroes';
  info: {
    description: '';
    displayName: 'Hero';
    icon: 'layout';
  };
  attributes: {
    background: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    > &
      Schema.Attribute.Required;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    subHeading: Schema.Attribute.Text;
  };
}

export interface BlocksHighlightingCreations extends Struct.ComponentSchema {
  collectionName: 'components_blocks_highlighting_creations';
  info: {
    description: '';
    displayName: 'Highlighting creations';
    icon: 'star';
  };
  attributes: {
    content: Schema.Attribute.Blocks;
    creationsList: Schema.Attribute.Component<
      'component.creation-presentation',
      true
    > &
      Schema.Attribute.SetMinMax<
        {
          max: 4;
          min: 1;
        },
        number
      >;
    link: Schema.Attribute.Component<'component.simple-link', false>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface BlocksImageAndText extends Struct.ComponentSchema {
  collectionName: 'components_blocks_image_and_texts';
  info: {
    description: '';
    displayName: 'Image and text';
    icon: 'landscape';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    imagePosition: Schema.Attribute.Enumeration<['left', 'right']> &
      Schema.Attribute.DefaultTo<'left'>;
    text: Schema.Attribute.Blocks & Schema.Attribute.Required;
  };
}

export interface BlocksQuote extends Struct.ComponentSchema {
  collectionName: 'components_blocks_quotes';
  info: {
    description: '';
    displayName: 'Quote';
    icon: 'quote';
  };
  attributes: {
    text: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface BlocksSingleRichtext extends Struct.ComponentSchema {
  collectionName: 'components_blocks_single_richtexts';
  info: {
    description: '';
    displayName: 'Single richtext';
    icon: 'feather';
  };
  attributes: {
    richtextContent: Schema.Attribute.Blocks & Schema.Attribute.Required;
  };
}

export interface BlocksSingleSlider extends Struct.ComponentSchema {
  collectionName: 'components_blocks_single_sliders';
  info: {
    description: '';
    displayName: 'Single slider';
    icon: 'landscape';
  };
  attributes: {
    listSlides: Schema.Attribute.Component<'component.large-slide', true> &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
  };
}

export interface ComponentCard extends Struct.ComponentSchema {
  collectionName: 'components_component_cards';
  info: {
    description: '';
    displayName: 'Card';
    icon: 'apps';
  };
  attributes: {
    backgroundImage: Schema.Attribute.Media<'images'>;
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    link: Schema.Attribute.Component<'component.simple-link', false>;
  };
}

export interface ComponentCreationPresentation extends Struct.ComponentSchema {
  collectionName: 'components_component_creation_presentations';
  info: {
    displayName: 'Creation presentation';
    icon: 'magic';
  };
  attributes: {
    creationImage: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    creationLegend: Schema.Attribute.String;
    creationLink: Schema.Attribute.Component<'component.simple-link', false>;
  };
}

export interface ComponentLargeSlide extends Struct.ComponentSchema {
  collectionName: 'components_component_large_slides';
  info: {
    description: '';
    displayName: 'Large slide';
  };
  attributes: {
    backgroundImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    > &
      Schema.Attribute.Required;
    slideContent: Schema.Attribute.Text;
    slideLink: Schema.Attribute.Component<'component.simple-link', false>;
    slideOvertitle: Schema.Attribute.String;
    slideTitle: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ComponentSimpleLink extends Struct.ComponentSchema {
  collectionName: 'components_component_simple_links';
  info: {
    displayName: 'Simple Link';
    icon: 'exit';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface NavigationGroup extends Struct.ComponentSchema {
  collectionName: 'components_navigation_groups';
  info: {
    description: '';
    displayName: 'Group';
    icon: 'bulletList';
  };
  attributes: {
    entries: Schema.Attribute.Component<'navigation.link', true>;
    heading: Schema.Attribute.Component<'navigation.link', false>;
  };
}

export interface NavigationLink extends Struct.ComponentSchema {
  collectionName: 'components_navigation_links';
  info: {
    description: '';
    displayName: 'Link';
    icon: 'link';
  };
  attributes: {
    hasIconOnly: Schema.Attribute.Boolean;
    icon: Schema.Attribute.Media<'images' | 'files'>;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface OrderItemDiscountReference extends Struct.ComponentSchema {
  collectionName: 'components_order_item_discount_references';
  info: {
    description: '';
    displayName: 'Discount reference';
    icon: 'link';
  };
  attributes: {
    discount: Schema.Attribute.Relation<'oneToOne', 'api::discount.discount'>;
  };
}

export interface OrderItemProductReference extends Struct.ComponentSchema {
  collectionName: 'components_order_item_product_references';
  info: {
    description: '';
    displayName: 'Product reference';
    icon: 'link';
  };
  attributes: {
    product: Schema.Attribute.Relation<'oneToOne', 'api::product.product'>;
  };
}

export interface ProductOption extends Struct.ComponentSchema {
  collectionName: 'components_product_options';
  info: {
    description: '';
    displayName: 'Variant group';
    icon: 'bulletList';
  };
  attributes: {
    description: Schema.Attribute.Text;
    format: Schema.Attribute.Enumeration<['radio', 'checkbox', 'text input']>;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    options: Schema.Attribute.Component<'product.option-variant', true>;
    product: Schema.Attribute.Relation<'oneToOne', 'api::product.product'>;
    required: Schema.Attribute.Boolean;
  };
}

export interface ProductOptionVariant extends Struct.ComponentSchema {
  collectionName: 'components_product_option_variants';
  info: {
    description: '';
    displayName: 'Variant group option';
    icon: 'paintBrush';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'>;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    price: Schema.Attribute.Decimal;
    stock: Schema.Attribute.Integer & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blocks.cards-list': BlocksCardsList;
      'blocks.featured-articles': BlocksFeaturedArticles;
      'blocks.featured-products': BlocksFeaturedProducts;
      'blocks.hero': BlocksHero;
      'blocks.highlighting-creations': BlocksHighlightingCreations;
      'blocks.image-and-text': BlocksImageAndText;
      'blocks.quote': BlocksQuote;
      'blocks.single-richtext': BlocksSingleRichtext;
      'blocks.single-slider': BlocksSingleSlider;
      'component.card': ComponentCard;
      'component.creation-presentation': ComponentCreationPresentation;
      'component.large-slide': ComponentLargeSlide;
      'component.simple-link': ComponentSimpleLink;
      'navigation.group': NavigationGroup;
      'navigation.link': NavigationLink;
      'order.item-discount-reference': OrderItemDiscountReference;
      'order.item-product-reference': OrderItemProductReference;
      'product.option': ProductOption;
      'product.option-variant': ProductOptionVariant;
    }
  }
}
