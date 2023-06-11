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

        series.data.setAll(x.data);
        series.set("selectedDataItem", series.dataItems[0]);
      },

      resize: function (width, height) {
        // TODO: code to re-render the widget with a new size
      }
    };
  }
});
