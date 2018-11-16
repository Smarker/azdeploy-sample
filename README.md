# Azure Deploy Sample

An example Azure deployment.

[![Deploy to Azure](https://azuredeploy.net/deploybutton.svg)](https://deploy.azure.com/?repository=https://github.com/Smarker/azuredeploy-sample)

## Debugging Templates

For a detailed error message when deploying, run:

```sh
az group deployment validate \
    --resource-group <resource group name> \
    --template-file azuredeploy.json \
    --parameters azuredeploy.parameters.json
```

## Resources

* [Structure of ARM Template](https://docs.microsoft.com/en-us/azure/azure-resource-manager/resource-group-authoring-templates#template-format)
* [Azure Quickstart Templates](https://github.com/Azure/azure-quickstart-templates)
