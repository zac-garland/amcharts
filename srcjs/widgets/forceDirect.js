import "widgets";
import * as am5 from "@amcharts/amcharts5";
import * as am5hierarchy from "@amcharts/amcharts5/hierarchy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import { asHeader } from "../modules/header.js";

HTMLWidgets.widget({
  name: "forceDirect",

  type: "output",

  factory: function (el, width, height) {
    // TODO: define shared variables for this instance

    return {
      renderValue: function (x) {
        // TODO: code to render the widget, e.g.
        // Create root and chart
        var root = am5.Root.new(el.id);

        root.setThemes([am5themes_Animated.new(root)]);

        var container = root.container.children.push(
          am5.Container.new(root, {
            width: am5.percent(100),
            height: am5.percent(100),
            layout: root.verticalLayout
          })
        );

        var series = container.children.push(
          am5hierarchy.ForceDirected.new(root, {
            downDepth: 1,
            initialDepth: 2,
            valueField: "value",
            categoryField: "name",
            childDataField: "children",
            minRadius: 20,
            maxRadius: am5.percent(12),
            centerStrength: 0.5,
            manyBodyStrength: -1,
            nodePadding: 20
          })
        );

        series.data.setAll([
          {
            name: "First",
            children: [
              {
                name: "A1",
                children: [
                  {
                    name: "A1-1",
                    value: 10
                  },
                  {
                    name: "A1-2",
                    value: 30,
                    link: ["A2-3"]
                  },
                  {
                    name: "A1-3",
                    value: 20,
                    link: ["A3-2"]
                  }
                ]
              },
              {
                name: "A2",
                children: [
                  {
                    name: "A2-1",
                    value: 40,
                    link: ["A3-3"]
                  },
                  {
                    name: "A2-2",
                    value: 30
                  },
                  {
                    name: "A2-3",
                    value: 10
                  }
                ]
              },
              {
                name: "A3",
                children: [
                  {
                    name: "A3-1",
                    value: 5
                  },
                  {
                    name: "A3-2",
                    value: 20
                  },
                  {
                    name: "A3-3",
                    value: 20
                  }
                ]
              }
            ]
          }
        ]);
        series.set("selectedDataItem", series.dataItems[0]);
      },

      resize: function (width, height) {
        // TODO: code to re-render the widget with a new size
      }
    };
  }
});
