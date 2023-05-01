import { Breadcrumb, BreadcrumbItem, Button } from '@chakra-ui/react';
import Link from 'next/link';
import React, { forwardRef } from 'react';
import { IoIosArrowForward } from 'react-icons/io';

const BlueBreadcrumb = forwardRef(({ breads = [], ...props }, ref) => {
  const lastBreadIndex = breads.length - 1;
  return (
    <Breadcrumb
      separator={<IoIosArrowForward color="gray.500" />}
      overflowX="scroll"
      className="breadcrumb"
      ref={ref}
      {...props}
    >
      {breads.map(({ name, href }, index) =>
        index !== lastBreadIndex ? (
          <BreadcrumbItem key={name}>
            <Button as={Link} href={href}>
              {name}
            </Button>
          </BreadcrumbItem>
        ) : (
          <BreadcrumbItem key={name} isCurrentPage>
            <Button
              as={Link}
              href={href}
              className="second-btn"
              borderRadius="3xl"
            >
              {name}
            </Button>
          </BreadcrumbItem>
        ),
      )}
    </Breadcrumb>
  );
});

export default BlueBreadcrumb;
