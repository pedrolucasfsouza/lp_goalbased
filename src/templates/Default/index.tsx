import {TemplateProps} from "@/types";
import React, {Suspense} from "react";
import {FallbackLoader} from "@/components/FallbackLoader";
const Layout = React.lazy(() => {
    return Promise.all([
        import("./layout"),
        new Promise(resolve => setTimeout(resolve, 500))
    ])
        .then(([moduleExports]) => moduleExports);
});
export function DefaultTemplate({children}: TemplateProps) {
    return (
        <Suspense fallback={<FallbackLoader />}>
            <Layout >
                {children}
            </Layout>
        </Suspense>
    )
}