/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import * as $protobuf from "protobufjs/light";

const $root = ($protobuf.roots["default"] || ($protobuf.roots["default"] = new $protobuf.Root()))
.addJSON({
  SomeMessage: {
    fields: {
      id: {
        type: "uint32",
        id: 1
      },
      name: {
        type: "string",
        id: 2
      },
      centerHeight: {
        type: "double",
        id: 3
      },
      center: {
        rule: "repeated",
        type: "double",
        id: 4
      },
      ground: {
        type: "Ground",
        id: 5
      },
      cameraPosition: {
        rule: "repeated",
        type: "double",
        id: 6
      },
      children: {
        rule: "repeated",
        type: "Children",
        id: 7
      }
    },
    nested: {
      Ground: {
        fields: {
          size: {
            rule: "repeated",
            type: "double",
            id: 1
          },
          rotation: {
            type: "double",
            id: 2
          }
        }
      },
      Ground1: {
        fields: {
          size: {
            rule: "repeated",
            type: "double",
            id: 1
          },
          rotation: {
            type: "double",
            id: 2
          }
        }
      },
      Ground2: {
        fields: {
          size: {
            rule: "repeated",
            type: "double",
            id: 1
          },
          rotation: {
            type: "double",
            id: 2
          }
        }
      },
      Floors: {
        fields: {
          id: {
            type: "uint64",
            id: 1
          },
          name: {
            type: "string",
            id: 2
          },
          height: {
            type: "double",
            id: 3
          }
        }
      },
      Children1: {
        fields: {
          id: {
            type: "uint64",
            id: 1
          },
          name: {
            type: "string",
            id: 2
          },
          center: {
            rule: "repeated",
            type: "double",
            id: 3
          },
          ground: {
            type: "Ground2",
            id: 4
          },
          cameraPosition: {
            rule: "repeated",
            type: "double",
            id: 5
          },
          size: {
            rule: "repeated",
            type: "double",
            id: 6
          },
          floors: {
            rule: "repeated",
            type: "Floors",
            id: 7
          }
        }
      },
      Children: {
        fields: {
          id: {
            type: "uint64",
            id: 1
          },
          name: {
            type: "string",
            id: 2
          },
          centerHeight: {
            type: "double",
            id: 3
          },
          center: {
            rule: "repeated",
            type: "double",
            id: 4
          },
          ground: {
            type: "Ground1",
            id: 5
          },
          cameraPosition: {
            rule: "repeated",
            type: "double",
            id: 6
          },
          size: {
            rule: "repeated",
            type: "double",
            id: 7
          },
          children: {
            rule: "repeated",
            type: "Children1",
            id: 8
          }
        }
      }
    }
  }
});

export { $root as default };
