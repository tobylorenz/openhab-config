The general format for things and items is:
// itemtype itemname "labeltext [stateformat]" <iconname> (group1, group2, ...) ["tag1", "tag2", ...] {bindingconfig}

An overview of all itemtypes is provided here:
types.txt
All bindings/things should support "Basic Types".
However some bindings/things have issues to write "Numbers with Dimensions", so called QuantityTypes, or even read them.
This is the case for i.e. Modbus and KNX. So there only "Number" can be used, but not i.e. "Number:ElectricCurrent", at least for writing.

The tags ideally consist of one semantic class and one semantic property.
An overview of all semantic classes and properties is provided here:
* semantic_class.txt
* semantic_property.txt
The way these semantic tags are displayed in OpenHAB GUI is shown here:
SemanticTags.csv
