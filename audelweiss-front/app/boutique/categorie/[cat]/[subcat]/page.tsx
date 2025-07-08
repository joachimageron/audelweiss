'use client';

import { useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';

export default function RedirectToFilteredCategory() {
    const router = useRouter();
    const params = useParams();

    useEffect(() => {
        if (params?.subcat) {
            router.replace(
                `/boutique?sort=newest&page=1&search=&min=&max=&cat=${encodeURIComponent(params.subcat)}`
            );
        }
    }, [params, router]);

    return null;
}
