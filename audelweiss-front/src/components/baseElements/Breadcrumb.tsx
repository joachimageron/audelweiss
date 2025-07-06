"use client";

import Link from "next/link";
import { tv } from "tailwind-variants";

const styles = tv({
    slots: {
        breadcrumbWrapper: "inner-wrap w-full bg-background py-[1.5rem]! text-[1.4rem]",
        breadcrumbList: "flex items-center gap-[.5rem] flex-wrap",
        breadcrumbListItem: "flex items-center gap-[.5rem]",
        breadcrumbListItemLink: "text-primary hover:text-dark-primary hover:underline transition",
        breadcrumbSeparator: "text-gray-400",
    },
});

const { breadcrumbWrapper, breadcrumbList, breadcrumbListItem, breadcrumbListItemLink, breadcrumbSeparator } = styles();

type BreadcrumbItem = {
    label: string;
    href?: string;
};

type BreadcrumbProps = {
    items: BreadcrumbItem[];
};

export default function Breadcrumb({ items }: BreadcrumbProps) {
    return (
        <div className={breadcrumbWrapper()} aria-label="Breadcrumb">
            <ul className={breadcrumbList()}>
                {items.map((item, index) => {
                    const isLast = index === items.length - 1;
                    return (
                        <li key={index} className={breadcrumbListItem()}>
                            {!isLast && item.href ? (
                                <Link href={item.href} className={breadcrumbListItemLink()}>
                                    {item.label}
                                </Link>
                            ) : (
                                <p>{item.label}</p>
                            )}
                            {!isLast && <span className={breadcrumbSeparator()}></span>}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
