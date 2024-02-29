const options = {
    swaggerDefinition: {
        info: {
            title: "My APP API",
            description: "My API description",
            contact: {
                name: "My API",
            }
        },
        components: {
            schemas: {
                Product: {
                    type: "object",
                    properties: {
                        id: {
                            name: "id",
                            type: "integer",
                            format: "int64",
                            example: 1,
                            required: false,
                        },
                        name: {
                            name: "name",
                            type: "string",
                            example: "Product Name",
                            required: true,
                        },
                        description: {
                            name: "description",
                            type: "string",
                            example: "Product Description",
                            required: true,
                        },
                        active: {
                            name: "active",
                            type: "boolean",
                            example: true,
                            required: true,
                        },
                        thumbnail: {
                            name: "thumbnail",
                            type: "string",
                            example: "https://www.example.com/product-thumbnail.jpg",
                            required: true,
                        },
                        price: {
                            name: "price",
                            type: "integer",
                            format: "int64",
                            example: 1,
                            required: true,
                        },
                        quantityInStock: {
                            name: "quantityInStock",
                            type: "integer",
                            format: "int64",
                            example: 10,
                            required: false,
                        },
                    },
                },
            },
            requestBodies: {
                Product: {
                    content: {
                        "application/json": {
                            schema: {
                                $ref: "#/components/schemas/Product",
                            },
                        },
                    },
                },
            },
        },
    },
    apis: ["./src/routers/*.router.js"],
};

module.exports = options;