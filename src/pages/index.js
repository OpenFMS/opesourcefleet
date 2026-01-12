import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
<Heading as="h1" className="hero__title">
  Open Source Fleet Resources
</Heading>
<p className="hero__subtitle">
  Discover the best open-source software, hardware protocols, and telematics trends.
</p>
<div className={styles.buttons}>
  <Link
    className="button button--secondary button--lg"
    to="/docs/software-list">
    Browse Software List ⏱️
  </Link>
</div>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
