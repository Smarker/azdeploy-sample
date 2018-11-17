# Azure Deploy Sample

This is an example of using a custom Azure Resource Manager (ARM) template,
 `azuredeploy.json`, to deploy resources.

[![Deploy to Azure](https://azuredeploy.net/deploybutton.svg)](https://deploy.azure.com/?repository=https://github.com/Smarker/azdeploy-sample)

By clicking on this deploy button, several resources will be created:

1. App Service
1. App Service Plan
1. Logic App
1. Cosmos Database
1. Storage Account

## Configure Deployments

From the `app service` resource, click on `Deployment Center`:

![image](https://user-images.githubusercontent.com/7232635/48654100-29e6cf00-e9d8-11e8-93af-63c4ec955e65.png)

Follow the steps to hook the `app service` to your app.

The steps are:

1. Select source control (Github, Azure DevOps, etc.)
1. Select the build server (Kudu, Azure pipelines)
1. Configure the code's organization, repository, and branch

After following the configuration steps, you should be able to view your app
hosted on Azure at the app service's url.

## Debugging Templates

If you want to just verify an ARM template, without actually creating resources,
you can run this command:

```sh
az group deployment validate \
    --resource-group <resource group name> \
    --template-file azuredeploy.json \
    --parameters azuredeploy.parameters.json
```

It will provide more detailed error messages, to help you debug your template.

## Resources

* [Structure of ARM Template](https://docs.microsoft.com/en-us/azure/azure-resource-manager/resource-group-authoring-templates#template-format)
* [Azure Quickstart Templates](https://github.com/Azure/azure-quickstart-templates)
