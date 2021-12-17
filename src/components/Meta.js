import React from 'react';
import { Helmet } from 'react-helmet';

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keyword' content={keywords} />
    </Helmet>
  )
}

Meta.defaultProps = {
  title: 'ShieldCrest IPM Portal',
  description: 'Royalty Statements for Authors',
  keywords: 'royalty, royalties, calculator, author, book',
}

export default Meta;
