import {
    type RouteConfig,
    route,
    index,
    layout,
} from "@react-router/dev/routes";

export default [
    layout("./layouts/mainlayout.tsx", [
        index("./routes/home.tsx"),
        route("about", "./routes/about.tsx"),
        route("buying-house", "./routes/buyinghouse.tsx"),
        route("factory", "./routes/factory.tsx"),
        route("contact", "./routes/contact.tsx"),
    ]),
] satisfies RouteConfig;