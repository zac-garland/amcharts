#' <Add Title>#' <Add Title>
#'
#' <Add Description>
#'
#' @import htmlwidgets
#'
#' @export
forceDirect <- function(data = list(list(name = "First", children = list(
                          list(name = "A1", children = list(
                            list(name = "A1-1", value = 10L), list(
                              name = "A1-2", value = 30L,
                              link = list("A2-3")
                            ), list(
                              name = "A1-3", value = 20L,
                              link = list("A3-2")
                            )
                          )), list(name = "A2", children = list(
                            list(name = "A2-1", value = 40L, link = list("A3-3")), list(
                              name = "A2-2", value = 30L
                            ), list(name = "A2-3", value = 10L)
                          )),
                          list(name = "A3", children = list(
                            list(name = "A3-1", value = 5L),
                            list(name = "A3-2", value = 20L), list(
                              name = "A3-3",
                              value = 20L
                            )
                          ))
                        ))), width = NULL, height = NULL, elementId = NULL) {

  # forward options using x
  x <- list(
    data = data
  )

  # create widget
  htmlwidgets::createWidget(
    name = "forceDirect",
    x,
    width = width,
    height = height,
    package = "amcharts",
    elementId = elementId
  )
}

#' Shiny bindings for forceDirect
#'
#' Output and render functions for using forceDirect within Shiny
#' applications and interactive Rmd documents.
#'
#' @param outputId output variable to read from
#' @param width,height Must be a valid CSS unit (like \code{'100\%'},
#'   \code{'400px'}, \code{'auto'}) or a number, which will be coerced to a
#'   string and have \code{'px'} appended.
#' @param expr An expression that generates a forceDirect
#' @param env The environment in which to evaluate \code{expr}.
#' @param quoted Is \code{expr} a quoted expression (with \code{quote()})? This
#'   is useful if you want to save an expression in a variable.
#'
#' @name forceDirect-shiny
#'
#' @export
forceDirectOutput <- function(outputId, width = "100%", height = "400px") {
  htmlwidgets::shinyWidgetOutput(outputId, "forceDirect", width, height, package = "amcharts")
}

#' @rdname forceDirect-shiny
#' @export
renderForceDirect <- function(expr, env = parent.frame(), quoted = FALSE) {
  if (!quoted) {
    expr <- substitute(expr)
  } # force quoted
  htmlwidgets::shinyRenderWidget(expr, forceDirectOutput, env, quoted = TRUE)
}
