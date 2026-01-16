# crime-resource
Resource description goes here.

## Features
- Feature here.
- Another feature here.

## Dependencies
- [crime-mysql](https://github.com/crimeiv/mysql)
- [crime-example](https://github.com/crimefx/example)

## Installation
### Manual
- Clone the resource and place it either in the `[crime]` or `resources` directory.
```sh
git clone https://github.com/crimeiv/resource.git crime-resource
rm -rf crime-resource/.git
```
###
- Include it in the resources tag in your `server.xml`.

> [!IMPORTANT]
> You must also complete this step for every depencency. Also, all dependencies must be loaded before the current resource.
The resources section of your `server.xml` should look similar to the code below.
```xml
<resources>
    <resource src="crime-mysql" />
    <resource src="crime-example" />
    <resource src="crime-resource" />
</resources>
```

## Configuration
Every configuration option be found at [config.json](https://github.com/crimeiv/resource/blob/main/config.json).