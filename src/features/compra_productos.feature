Feature: Compra de productos en Sauce Demo
  Como un cliente de Sauce Demo
  Quiero poder iniciar sesión, agregar productos al carrito y completar una compra
  Para poder adquirir los productos que necesito

  Scenario Outline: Inicio de sesión exitoso
    Given que estoy en la página de inicio de Sauce Demo
    When ingreso mis credenciales username "<username>" y password "<password>"
    And hago clic en el botón Login
    Then valido que estoy en la página de productos
    Examples:
      | username      | password     |
      | standard_user | secret_sauce |
      | visual_user   | secret_sauce |

  Scenario Outline: Inicio de sesión incorrecto
    Given que estoy en la página de inicio de Sauce Demo
    When ingreso mis credenciales username "<username>" y password "<password>"
    And hago clic en el botón Login
    Then valido que se muestra un mensaje de error de inicio de sesión
    Examples:
      | username        | password     |
      | locked_out_user | secret_sauce |

  Scenario Outline: Agregar producto al carrito de compras
    Given que estoy en la página de inicio de Sauce Demo
    When ingreso mis credenciales username "<username>" y password "<password>"
    And hago clic en el botón Login
    And agrego el producto "<product>" al carrito de compras
    Then valido que el se muestra el ícono del carrito de compras con el número de productos
    Examples:
      | username      | password     | product               |
      | standard_user | secret_sauce | Sauce Labs Bike Light |

  Scenario Outline: Agregar producto al carrito de compras
    Given que estoy en la página de inicio de Sauce Demo
    When ingreso mis credenciales username "<username>" y password "<password>"
    And hago clic en el botón Login
    And agrego el producto "<product>" al carrito de compras
    And hago clic en el ícono del carrito de compras
    Then valido que estoy en la página del carrito de compras
    And valido que el producto "<product>" está en la lista del carrito de compras
    Examples:
      | username      | password     | product               |
      | standard_user | secret_sauce | Sauce Labs Bike Light |

  Scenario Outline: Agregar producto al carrito de compras
    Given que estoy en la página de inicio de Sauce Demo
    When ingreso mis credenciales username "<username>" y password "<password>"
    And hago clic en el botón Login
    And agrego el producto "<product>" al carrito de compras
    And hago clic en el ícono del carrito de compras
    Then valido que el producto "<product>" está en la lista del carrito de compras
    When hago clic en el botón Checkout
    And ingreso mis datos de envío
      | firstName  | John  |
      | lastName   | Doe   |
      | postalCode | 12345 |
    And hago clic en el botón Continue
    And hago clic en el botón Finish
    Then valido que se muestra un mensaje de compra exitosa
    Examples:
      | username      | password     | product               |
      | standard_user | secret_sauce | Sauce Labs Bike Light |
